// import { Suspense } from 'react';
// import { selectAuctionWithSellerInfo } from 'src/entities/auction/supabase';
// import AuctionDetail from 'src/features/auction/AuctionDetail';
// import AuctionDetailICarousel from 'src/features/auction/AuctionDetailICarousel';
// import AuctionDetailNavbar from 'src/features/auction/AuctionDetailNavbar';
// import HighestBuyerInfoSection from 'src/features/auction/HighestBuyerInfoSection';
// import SellerInfoSection from 'src/features/auction/SellerInfoSection';
// import EpisodeDetailSection from 'src/features/episode/EpisodeDetailSection';
// import { createServer } from 'src/shared/supabase/client/server';
// import AuctionErrorBoundary from 'src/shared/ui/AuctionErrorBoundary';
// import PageContainer from 'src/shared/ui/PageContainer';

// const AuctionDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id: auctionId } = await params;

//   // NOTE - 경매 상품 및 경매 업체 정보
//   const auctionInfo = await selectAuctionWithSellerInfo(auctionId);
//   // const { image_urls, address, seller } = auctionInfo;

//   const supabase = await createServer();
//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return;
//   }

//   //NOTE - 로그인된 유저 정보
//   // const userInfo: UserInfoType = await fetchDetailPageUserInfo(user.id);

//   return (
//     <>
//       <PageContainer className="-pt-8 -px-5 min-h-screen">
//         <div className="h-68 w-full">
//           {/* 이미지 슬라이더 */}
//           <AuctionDetailICarousel imageUrls={image_urls} />
//           {/* 상단 네비게이션 */}
//           <AuctionDetailNavbar auctionId={auctionId} userInfo={userInfo} />
//         </div>
//         <div className="-translate-y-14 px-4">
//           {/* 경매 상품 정보 */}
//           <AuctionDetail auctionInfo={auctionInfo} userInfo={userInfo} />

//           {/* 판매자 정보 */}
//           <SellerInfoSection seller={seller} address={address} userInfo={userInfo} />
//           {/* 최고 입찰자 정보 */}
//           <AuctionErrorBoundary
//             fallback={
//               <div className="flex h-[200px] items-center justify-center border-2">
//                 <h3 className="text-[22px]">⚠️ 최고 입찰자 정보 섹션에서 오류가 발생했습니다.</h3>
//               </div>
//             }
//           >
//             <Suspense
//               fallback={
//                 <div className="flex h-[200px] items-center justify-center">
//                   <span className="animate-pulse text-lg text-gray-500">{'🚚 입찰자 정보를 불러오는 중입니다...'}</span>
//                 </div>
//               }
//             >
//               <HighestBuyerInfoSection auctionId={auctionId} userInfo={userInfo} />
//             </Suspense>
//           </AuctionErrorBoundary>
//           {/* 사연 섹션 */}
//           <EpisodeDetailSection auctionId={auctionId} userInfo={userInfo} sellerId={seller.seller_id} />
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default AuctionDetailPage;

import React from 'react';

const page = () => {
  return <div>page</div>;
};

export default page;
