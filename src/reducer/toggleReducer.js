import { fromJS } from "immutable";
const initialState = {
  now: 0,
  imgs: [
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a49fb8_image0.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a4bb3c_image1.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a4d574_image2.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a4ef42_image3.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a50989_image4.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a5237b_image5.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a53d1f_image6.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131640105fd5d36a5613d_image7.jpg-tBig?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f843da4_image0.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f845a93_image1.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f847558_image2.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f848fd5_image3.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f84aa62_image4.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f84ef0c_image6.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f8514c2_image7.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
      src:
        "https://cdn.uootu.com/202012131659365fd5d7f858033_image11.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d2806dc_image0.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d28231c_image1.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d283d2d_image2.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d285744_image3.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d2871a2_image4.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d288b9a_image5.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "https://cdn.uootu.com/202012131703145fd5d8d28a8d9_image6.jpg?fv=20201014012604uXEo2GLN",
      tit: "照片",
    },
    {
      src:
        "http://cdn.uootu.com/201808191102545b78ddde14ccb_image5.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201808191102545b78ddde13263_image1.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201808191104095b78de29510b4_image1.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201808191104095b78de294fd41_image0.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201808191102545b78ddde16a26_image10.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201808191102545b78ddde164ad_image9.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "逃跑",
    },
    {
      src:
        "http://cdn.uootu.com/201902232040265c713f3a98ddc_image1.jpg-zMin?fv=20190218000005cTUDk1wG",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201902232040265c713f3a972f6_image0.jpg-tBig?fv=20190218000005cTUDk1wG",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1a3e8_image0.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1abf9_image1.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1b1a6_image2.jpg-tBig?v=1025011",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1ce91_image4.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1f6d0_image5.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a1fd37_image6.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a203db_image7.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a209ca_image8.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111311545b6e701a21021_image9.jpg-tBig?v=102501",
      tit: "大灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2adead_image1.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2ae52f_image2.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2aeb79_image3.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2af18c_image4.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2af91e_image5.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b009c_image6.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b06c4_image7.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b183b_image8.jpg-zMin?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b2c21_image9.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b31d8_image10.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111319145b6e71d2b386e_image11.jpg-tBig?v=102501",
      tit: "小y",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a8505a0_image0.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a851374_image1.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a851b65_image2.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a85240a_image3.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a852d14_image4.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a853790_image5.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a853ead_image6.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a854558_image7.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a854da7_image8.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111327045b6e73a855a03_image9.jpg-tBig?v=102501",
      tit: "周颖",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f60b37_image0.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f613a3_image1.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f61962_image2.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f61ee5_image3.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f624b1_image4.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f62a0f_image5.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f62fc7_image6.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f63560_image7.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111338395b6e765f63b1e_image8.jpg-tBig?v=102501",
      tit: "大灰灰",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac804ce_image0.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac8101e_image1.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac816ba_image2.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac81d7e_image3.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac824f1_image4.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac82b93_image5.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac83156_image6.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac83718_image7.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac83dc9_image8.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac84949_image9.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac84f8e_image10.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111352445b6e79ac85531_image11.jpg-tBig?v=102501",
      tit: "竹子",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a0247be_image0.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a025159_image1.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a0258ca_image2.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a025ffc_image3.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a0265c8_image4.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a026d52_image5.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a0275dc_image6.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a027dea_image7.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a0284eb_image8.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a02b95e_image10.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111348165b6e78a02bfc3_image11.jpg-tBig?v=102501",
      tit: "天伊",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6141d_image0.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c61cb4_image1.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c622aa_image2.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6288f_image3.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c62fce_image4.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6b0b7_image5.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6b7d2_image6.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6c023_image7.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6c69a_image8.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6cdc3_image9.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6d42a_image10.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111346365b6e783c6d9bb_image11.jpg-tBig?v=102501",
      tit: "果果",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac9994c5_image0.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac999e23_image1.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99a3f9_image2.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99a965_image3.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99af33_image4.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99b4ea_image5.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99ba8d_image6.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111357295b6e7ac99f10a_image10.jpg-tBig?v=102501",
      tit: "安琪",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83a94c8_image0.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83aa276_image1.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83aabff_image2.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83ab41e_image3.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83abb7f_image4.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83ac370_image5.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83ac985_image6.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83b1ced_image7.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83b239b_image8.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://cdn.uootu.com/201808111356195b6e7a83b2a49_image9.jpg-tBig?v=102501",
      tit: "群星",
    },
    {
      src:
        "http://imglf2.nosdn.127.net/img/R0ZvbktsUXBzTENDWXQzUFlaUWxReUl5c3BOTW1PZVV6SGlJeThGbitROVpSd0NxWWlwejlBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
      tit: "other",
    },
    {
      src:
        "http://imglf1.nosdn.127.net/img/R0ZvbktsUXBzTENDWXQzUFlaUWxRNTk3RDhVakpUdnNya2d6OXQrWHNCV3lJMkFZcHg1TkxRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
      tit: "other",
    },
    {
      src:
        "http://imglf2.nosdn.127.net/img/R0ZvbktsUXBzTENDWXQzUFlaUWxRK2tObXdxc0F3Q1JyMDljZit5b0tBbGhkN0ZqT1FuTmtBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
      tit: "other",
    },
    {
      src:
        "http://imglf1.nosdn.127.net/img/R0ZvbktsUXBzTENDWXQzUFlaUWxRMy9NbHR3R0VlRnlVWGVUMkFqc1J1RWZaOVRlQkFjSWdBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
      tit: "other",
    },
    {
      src:
        "http://cdn.uootu.com/201808111343295b6e778172435_image0.jpg-tBig?v=102501",
      tit: "other",
    },
    {
      src:
        "http://cdn.uootu.com/201808111343295b6e778173dbb_image1.jpg-tBig?v=102501",
      tit: "other",
    },
    {
      src:
        "http://cdn.uootu.com/201808111345045b6e77e02822c_image0.jpg-tBig?v=102501",
      tit: "other",
    },
    {
      src:
        "http://cdn.uootu.com/201808111345045b6e77e028aa1_image1.jpg-tBig?v=102501",
      tit: "other",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d8171fa_image1.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d8178e2_image2.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d817e54_image3.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d818501_image4.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d818b59_image5.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d81982e_image6.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d819dab_image7.jpg-tBig?v=102501",
      tit: "四方",
    },
    {
      src:
        "http://cdn.uootu.com/201808111353285b6e79d81a34c_image8.jpg-tBig?v=102501",
      tit: "四方",
    },
  ],

  logogif: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_IMG":
      // 0 - 8  的随机数
      return fromJS(state)
        .set("now", Math.floor(Math.random() * (100 - 0 + 1) + 0))
        .toJS();
    default:
      return state;
  }
};
