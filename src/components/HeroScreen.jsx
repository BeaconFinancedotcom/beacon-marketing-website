
import './HeroScreen.css'

/*
 * Beacon Marketing Website
 *
 * Earlier Beacon dashboard design preview.
 * This image is temporary and can be replaced
 * when the updated application UI is ready.
 *
 * Uses the original hero photograph's
 * 1648 x 928 coordinate system.
 */

const DASHBOARD_PREVIEW =
  '/images/beacon/beacon_dashboard_legacy_preview.png'

export default function HeroScreen() {
  return (
    <>
      <svg
        className="bh-laptop-screen-map"
        viewBox="0 0 1648 928"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Earlier Beacon dashboard design preview inside the laptop"
      >
        <defs>
          <clipPath
            id="beacon-laptop-display-clip"
            clipPathUnits="userSpaceOnUse"
          >
            <polygon
              points="836,139 1545,139 1513,591 800,586"
            />
          </clipPath>
        </defs>

        <g clipPath="url(#beacon-laptop-display-clip)">
          <image
            href={DASHBOARD_PREVIEW}
            x="800"
            y="139"
            width="745"
            height="452"
            preserveAspectRatio="none"
          />
        </g>
      </svg>

      <span className="bh-preview-caption">
        Earlier Beacon design preview
      </span>
    </>
  )
}
