import React from "react";

type LogoProps = {
  height?: number;
  width?: number;
  ariaLabel: string;
};

export function Logo({ height = 33, width = 100, ariaLabel }: LogoProps) {
  return (
    <svg
      role="img"
      width={width}
      height={height}
      viewBox="0 0 92 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <defs>
        <polygon
          id="path-1"
          points="25.4850682 25.0433604 39.0295128 25.0433604 39.0295128 4.60543577 25.4850682 4.60543577"
        ></polygon>
        <polygon
          id="path-3"
          points="39.6670552 25.0433604 53.2114998 25.0433604 53.2114998 4.60542331 39.6670552 4.60542331 39.6670552 25.0433604"
        ></polygon>
        <polygon
          id="path-5"
          points="-34 25.0433604 57.876336 25.0433604 57.876336 -4.98715989 -34 -4.98715989"
        ></polygon>
      </defs>
      <g
        id="Page-3"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="d-landing-motoboy"
          transform="translate(-161.000000, -17.000000)"
        >
          <g id="navbar">
            <g id="logo" transform="translate(195.000000, 22.000000)">
              <g className="letters">
                <polygon
                  id="Fill-1"
                  fill="#00BAFF"
                  points="3.45918678 0 0 0 0 18 11 18 11 14.6969787 3.45918678 14.6969787"
                ></polygon>
                <path
                  d="M18.0507577,14.9023425 C15.9945951,14.8876325 14.5395491,13.3473182 14.5622374,11.2092531 C14.5846764,9.08128564 16.0287523,7.60629377 18.0876575,7.60828835 C20.1652618,7.61028293 21.5963729,9.10721518 21.5865247,11.2682179 C21.5766764,13.4196217 20.1196358,14.9171772 18.0507577,14.9023425 L18.0507577,14.9023425 Z M18.0854136,4.61542114 C14.2438526,4.60183306 11.3024705,7.47702005 11.3030938,11.2451556 C11.3037171,15.0202721 14.2296412,17.8913453 18.0734461,17.8886027 C21.9399393,17.8859848 24.8481615,15.0392206 24.8474136,11.257871 C24.8467902,7.46019079 21.9647469,4.62900921 18.0854136,4.61542114 L18.0854136,4.61542114 Z"
                  id="Fill-2"
                  fill="#00BAFF"
                ></path>
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <g id="Clip-5"></g>
                <path
                  d="M35.7650087,11.3066011 C35.7375832,13.4365631 34.2887702,14.9171648 32.2327322,14.9023301 C30.1765696,14.8876201 28.7215236,13.3473057 28.7442119,11.2093653 C28.7667756,9.08127317 30.2107268,7.6062813 32.269632,7.60827588 C34.3326509,7.61039512 35.7547864,9.08788022 35.7650087,11.2244493 C35.7650087,11.2518748 35.764884,11.2791756 35.7650087,11.3066011 M35.7621415,5.51808076 C34.7557512,4.9482542 33.5700981,4.61989648 32.2673881,4.61540867 C28.4258271,4.6018206 25.484445,7.47700759 25.4850683,11.2451431 C25.4856916,15.0202596 28.4116157,17.8913328 32.2555453,17.8887149 C33.5623691,17.8877176 34.7551279,17.5556201 35.7678759,16.9785631 C35.7682499,17.8574249 35.7686238,18.4121675 35.7686238,18.4121675 C35.7587756,20.5639453 34.301735,22.057013 32.2327322,22.057013 C29.5759518,22.057013 28.4076266,19.4825089 28.4076266,19.4825089 L25.973865,20.9601187 C25.973865,20.9601187 27.3720656,25.0433978 32.2555453,25.0433978 C36.1219138,25.0406553 39.030136,22.1938911 39.0295127,18.4125415 L39.0295127,4.60543577 L35.7617675,4.60543577 C35.7617675,4.60543577 35.7618921,4.94538699 35.7621415,5.51808076"
                  id="Fill-4"
                  fill="#00BAFF"
                  mask="url(#mask-2)"
                ></path>
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-3"></use>
                </mask>
                <g id="Clip-8"></g>
                <path
                  d="M49.9469957,11.3073366 C49.9191962,13.4369247 48.4705079,14.9171523 46.4147192,14.9023176 C44.3585566,14.8876076 42.9035106,13.3472932 42.9261989,11.2093528 C42.9487626,9.0812607 44.3927138,7.60626883 46.451619,7.60838808 C48.5143886,7.61038266 49.9362748,9.08761843 49.9469957,11.2236889 C49.9469957,11.251613 49.946871,11.2794125 49.9469957,11.3073366 M49.9441285,5.51806829 C48.9377382,4.94824173 47.7520851,4.61988401 46.4494997,4.61539621 C42.6079388,4.60180813 39.666432,7.47699512 39.6670553,11.2451306 C39.6676786,15.0202472 42.5936027,17.8913203 46.4375322,17.8887024 C47.7443561,17.8877051 48.9372396,17.5557322 49.9498629,16.9786753 C49.9502369,17.8575371 49.9506108,18.412155 49.9506108,18.412155 C49.9407626,20.5639328 48.483722,22.0570005 46.4147192,22.0570005 C43.7579388,22.0570005 42.5896136,19.4824965 42.5896136,19.4824965 L40.155852,20.9601062 C40.155852,20.9601062 41.5540526,25.0433854 46.4375322,25.0433854 C50.3039008,25.0406428 53.212123,22.1938786 53.2114997,18.412529 L53.2114997,4.60542331 L49.9437545,4.60542331 C49.9437545,4.60542331 49.9438791,4.94549919 49.9441285,5.51806829"
                  id="Fill-7"
                  fill="#00BAFF"
                  mask="url(#mask-4)"
                ></path>
                <mask id="mask-6" fill="white">
                  <use xlinkHref="#path-5"></use>
                </mask>
                <g id="Clip-11"></g>
                <polygon
                  id="Fill-10"
                  fill="#00BAFF"
                  mask="url(#mask-6)"
                  points="54.5308022 17.6976965 57.876336 17.6976965 57.876336 4.60539837 54.5308022 4.60539837"
                ></polygon>
                <path
                  d="M56.2035317,3.34173225 C57.1273962,3.34173225 57.876361,2.59276748 57.876361,1.66890298 C57.876361,0.745038482 57.1273962,-0.00380162602 56.2035317,-0.00380162602 C55.2796672,-0.00380162602 54.5307024,0.745038482 54.5307024,1.66890298 C54.5307024,2.59276748 55.2796672,3.34173225 56.2035317,3.34173225"
                  id="Fill-12"
                  fill="#00BAFF"
                  mask="url(#mask-6)"
                ></path>
              </g>
              <g className="rabbit">
                <path
                  d="M-6.42939512,2.51944173 C-7.1773626,2.12638482 -8.05572575,1.7819458 -8.38433279,1.65728455 C-8.49740054,1.57588076 -8.56945474,1.52215176 -8.56945474,1.52215176 C-8.56945474,1.52215176 -12.9995415,-1.64686179 -14.9527339,-2.46875339 C-16.9060509,-3.29076965 -20.3028206,-5.08015718 -23.751948,-4.98329539 C-26.4752976,-4.90687805 -28.1558558,-4.40125203 -28.7433843,-4.26026016 C-29.439742,-4.09321409 -29.9053518,-3.89674797 -29.1424249,-3.53734959 C-28.886994,-3.41705149 -27.798078,-2.76868835 -26.4759209,-2.01398916 C-24.5445442,-0.911485095 -22.1156444,0.417902439 -21.0601377,0.659495935 C-20.0495089,0.890742547 -18.3849073,1.23031978 -16.2580618,1.18519241 C-13.8309073,1.13383198 -12.6503653,2.16939295 -12.411639,2.54736585 C-12.8462081,1.93054201 -14.5002136,1.43463957 -16.706219,1.57101897 C-18.8294493,1.70228726 -20.5361864,1.55992412 -21.5299859,1.2643523 C-23.4774439,0.685176152 -25.5643978,-0.184460705 -27.3191295,-1.00560434 C-28.0407935,-0.785826558 -28.4858341,-0.601203252 -28.7556011,-0.486888889 C-29.3678125,-0.227468835 -29.9407556,0.238390244 -29.0820889,0.480482385 C-28.4681322,0.653636856 -22.7271079,2.70730623 -21.0557745,2.80715989 C-20.1057312,2.86400542 -18.5473409,2.92010298 -16.6283057,2.55808672 C-14.4569561,2.1483252 -13.3261539,3.03990244 -13.0607501,3.38533875 C-13.7387827,4.41541463 -14.1825767,5.61303523 -14.0556715,6.94416802 C-21.9938504,5.54447154 -24.5275902,4.81981572 -26.3200943,4.51165312 C-29.4538287,3.97299187 -33.4346363,6.62777778 -33.9228098,9.9155935 C-34.2003057,11.7838916 -33.7237257,13.5290244 -32.5886851,15.1437615 C-31.3320997,16.9312791 -29.6787176,18.4729648 -29.4382461,18.8003252 C-29.2846634,19.0796911 -29.3346526,19.817561 -29.3240564,20.3139621 C-29.3122136,20.8715718 -28.6108694,21.3725854 -28.2024791,21.4096098 C-27.9591404,21.4316748 -23.2591621,22.9001843 -23.2591621,22.9001843 L-16.2962081,25.0433604 C-16.2962081,25.0433604 -16.1904954,24.5624173 -16.1694276,24.3598428 C-16.1160726,23.8449919 -16.5080076,22.5738211 -18.139574,22.0989864 C-20.5415469,21.3763252 -21.013639,21.2390732 -21.5247501,21.0853659 C-21.7998775,21.0025908 -21.6069019,20.998477 -21.1805604,20.6617669 C-20.4531621,20.0445691 -19.8297312,19.2119566 -19.5112217,18.5347967 C-18.0902081,15.5133821 -19.8785984,12.8228184 -19.8785984,12.8228184 C-19.8785984,12.8228184 -18.7623816,13.9950081 -18.3430211,16.0445637 C-17.8190699,18.6047317 -19.5546038,20.6360867 -19.5546038,20.6360867 L-18.5189182,20.9363957 C-18.5189182,20.9363957 -11.829097,14.1984553 -11.1756228,13.4710569 C-10.6239967,12.8568509 -9.66435447,12.4694038 -9.17655501,12.3109593 C-7.39215393,11.7932412 -5.16084228,10.793458 -4.59338428,10.4343089 C-4.02592629,10.0751599 -3.33069051,8.80698103 -3.15616477,8.49358266 C-2.98176369,8.18018428 -2.75288564,7.76718157 -2.70838157,7.30057453 C-2.69279892,7.13664499 -3.64658211,5.8643523 -3.64658211,5.8643523 C-3.64658211,5.8643523 -5.17206179,3.28436314 -6.42939512,2.51944173"
                  id="Fill-13"
                  fill="#00BAFF"
                  mask="url(#mask-6)"
                ></path>
                <path
                  d="M-25.8994997,23.2807252 C-26.2952992,23.5160856 -26.4325512,24.1408878 -25.8563669,24.4780965 C-25.3450065,24.7472401 -23.6272992,23.805923 -23.6272992,23.805923 L-25.3498683,23.2628986 C-25.3498683,23.2628986 -25.6201339,23.1492076 -25.8994997,23.2807252"
                  id="Fill-14"
                  fill="#00BAFF"
                  mask="url(#mask-6)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
