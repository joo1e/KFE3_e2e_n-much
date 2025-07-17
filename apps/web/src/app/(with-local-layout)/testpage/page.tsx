'use client';

import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

const Postcode = () => {
  const handleComplete = (data: Address) => {
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data.zonecode);
    console.log(data.roadAddress);
  };

  return (
    <div>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </div>
  );
};

export default Postcode;
