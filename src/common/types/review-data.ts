export type TReviewFormData = {
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type TPostReviewData = TReviewFormData & {
  cameraId: number;
}

export type TPostReviewProps = {
  reviewData: TPostReviewData;
  callWhenResolved: () => void;
}
