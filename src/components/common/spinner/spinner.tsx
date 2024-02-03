import { cssValue } from './helpers/unit-converter';
import { LoaderHeightWidthRadiusProps } from './helpers/props';
import { createAnimation } from './helpers/animation';

const scale = createAnimation(
  'ScaleLoader',
  '0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}',
  'scale'
);

function Spinner({
  loading = true,
  color = '#7575e2',
  speedMultiplier = 1,
  cssOverride = {},
  height = 40,
  width = 4,
  radius = 2,
  margin = 5,
  ...additionalprops
}: LoaderHeightWidthRadiusProps): JSX.Element | null {
  const wrapper: React.CSSProperties = {
    alignSelf: 'center',
    justifySelf: 'center',
    flexGrow: 10,
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => ({
    backgroundColor: color,
    width: cssValue(width),
    height: cssValue(height),
    margin: cssValue(margin),
    borderRadius: cssValue(radius),
    display: 'inline-block',
    animation: `${scale} ${1 / speedMultiplier}s ${
      i * 0.1
    }s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
    animationFillMode: 'both',
  });

  if (!loading) {
    return null;
  }

  return (
    <div className="container">
      <div className="page-content__title-wrapper"
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px', marginBottom: '150px'}}
      >
        <span style={wrapper} {...additionalprops} data-testid="spinner-container">
          <span style={style(1)} />
          <span style={style(2)} />
          <span style={style(3)} />
          <span style={style(4)} />
          <span style={style(5)} />
        </span>
      </div>
    </div>
  );
}

export { Spinner };
