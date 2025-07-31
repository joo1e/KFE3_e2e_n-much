//주소등록하면 수파베이스에 등록하는 것은 되지만, 수파베이스에서 데이터를 가져와서 AddressList에 반영하는 것은 안됨

import type { AddressRow, AddressInsert } from 'src/shared/supabase/types';

// 기본 주소 정보 조회
export const getDefaultAddressInfo = async (userId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/addresses?user_id=${userId}`);

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.error);
  }

  const data: AddressRow = await res.json();
  return data;
};

// 주소 등록
export const postAddressInfo = async (payload: AddressInsert) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/addresses`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.error);
  }

  const result = await res.json();
  return result.data;
};

// userId로 해당 유저의 주소 목록을 가져오는 함수 (fetch 방식)
export const getAddressList = async (userId: string): Promise<AddressRow[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/addresses?user_id=${userId}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || '주소 목록을 불러오는 데 실패했습니다.');
  }

  const result = await res.json();
  return result;
};
