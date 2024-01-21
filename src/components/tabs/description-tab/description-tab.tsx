type TDescriptionTabProps = {
  text: string;
}

export function DescriptionTab ({text}: TDescriptionTabProps) {
  return (
    <div className="tabs__element is-active">
      <div className="product__tabs-text">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}
