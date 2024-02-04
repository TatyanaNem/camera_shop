export type TReviewData = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type TPostReviewProps = {
  reviewData: TReviewData;
  callWhenResolved: () => void;
}
