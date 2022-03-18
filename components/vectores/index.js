import { Box } from "@mui/material";
import React from "react";

const Waves = ({ skills }) => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 116.45933014354068,142.67464114832535 232.91866028708137,152.34928229665073 324,160 C 415.08133971291863,167.65071770334927 480.78468899521533,173.27751196172247 577,170 C 673.2153110047847,166.72248803827753 799.9425837320575,154.54066985645935 893,155 C 986.0574162679425,155.45933014354065 1045.444976076555,168.5598086124402 1131,167 C 1216.555023923445,165.4401913875598 1328.2775119617227,149.2200956937799 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#eddec788"
        ></path>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 121.8468899521531,280.62200956937795 243.6937799043062,295.24401913875596 335,291 C 426.3062200956938,286.75598086124404 487.07177033492826,263.64593301435406 579,269 C 670.9282296650717,274.35406698564594 794.0191387559807,308.1722488038278 897,297 C 999.9808612440193,285.8277511961722 1082.8516746411483,229.66507177033492 1170,217 C 1257.1483253588517,204.33492822966508 1348.5741626794259,235.16746411483254 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#eddec7ff"
        ></path>
      </svg>
      <Box marginTop={-3}>
        <Box marginBottom={-1} height={100} sx={{ bgcolor: "#EDDEC7" }}>
          {skills}
        </Box>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 98.05897435897435,149.76923076923077 196.1179487179487,166.53846153846152 267,172 C 337.8820512820513,177.46153846153848 381.58717948717947,171.6153846153846 464,175 C 546.4128205128205,178.3846153846154 667.5333333333334,191.00000000000003 752,174 C 836.4666666666666,156.99999999999997 884.2794871794872,110.38461538461537 958,102 C 1031.7205128205128,93.61538461538463 1131.3487179487179,123.46153846153848 1216,135 C 1300.6512820512821,146.53846153846152 1370.325641025641,139.76923076923077 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#eddec788"
            transform="rotate(-180 720 200)"
          ></path>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 99.33076923076922,246.85384615384615 198.66153846153844,227.7076923076923 272,229 C 345.33846153846156,230.2923076923077 392.6846153846154,252.02307692307693 454,257 C 515.3153846153846,261.9769230769231 590.6,250.20000000000002 685,238 C 779.4,225.79999999999998 892.9153846153847,213.17692307692303 971,217 C 1049.0846153846153,220.82307692307697 1091.7384615384615,241.09230769230766 1164,252 C 1236.2615384615385,262.90769230769234 1338.1307692307691,264.45384615384614 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#eddec7ff"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </Box>
    </div>
  );
};

export default Waves;