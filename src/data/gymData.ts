export const GYM_INFO = {
  name: "Efraim Fitness",
  location: "Nanuque • MG",
  fullAddress: "Rua Tiradentes, nº 377A — Bairro Israel Pinheiro (Próximo à Lagoa dos Namorados), Nanuque - MG • CEP 39860-000",
  shortAddress: "Rua Tiradentes, 377A • Bairro Israel Pinheiro (Próximo à Lagoa dos Namorados)",
  cityState: "Nanuque - Minas Gerais",
  phone: "(33) 99952-3838",
  phoneClean: "5533999523838",
  instagram: "https://instagram.com/efraimfitness_",
  instagramHandle: "@efraimfitness_",
  googleMapsUrl: "https://maps.app.goo.gl/b6vaUTYg91N6sUSn8",
  defaultWhatsAppMessage: "Olá, gostaria de falar com a equipe da Efraim Fitness!",
};

export const IMAGES = {
  brandLogo: "/logo.png",
  heroBackground: "/hero-bg-new.png",
  heroLogo: "/logo.png",
  brandLogoRemote: "https://plain-enam-prod-public.komododecks.com/202610/05/N8aFuLbguonhLhNvpzX1/image.jpg",
  heroBackgroundRemote: "https://plain-enam-prod-public.komododecks.com/202610/05/wjnJq34pb4cSHSSKND8u/image.png",
  facadeAbout: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxm8TjnzLDSDBKzyQjoJnOvazO8Gb4eKnS88IaFbhp7hO6QadypFIt2rPQH28kaiAOCHuYD8lBIVS7gzhQq1oLr91pNM1Mu3pXBkb_iuEDvxsrIcC1pUJbBi6cbNu1Y0_pMiksawYrtBASnEHrkdYNpdZ3SRi5iVKSByX6QNtOqmHFu-c21ZdkejSo6FZVoHyzKWMZQN2_NOyONLHnpti-ZtkKCcmqu5catm5L7PwYqBjogYWoTF89XwCsejvjpNac",
  musculacao: "/modalidade-musculacao.png",
  funcional: "/modalidade-funcional.png",
  avaliacao: "/modalidade-avaliacao.png",
  personal: "/modalidade-personal.png",
  musculacaoRemote: "https://plain-enam-prod-public.komododecks.com/202610/06/hXXcpBlb5QmqLLkUxHPo/image.png",
  funcionalRemote: "https://plain-enam-prod-public.komododecks.com/202610/06/gkwQA6Rcql3KDpqOpjXW/image.png",
  avaliacaoRemote: "https://plain-enam-prod-public.komododecks.com/202610/06/IZ82dVBMygakHwvcKToY/image.png",
  personalRemote: "https://plain-enam-prod-public.komododecks.com/202610/06/CBEJw6PKVHLjZmflFxps/image.png",
  productsPoster: "/produtos-conveniencia.png",
  productsPosterRemote: "https://plain-enam-prod-public.komododecks.com/202610/06/f4pZkE8xXsL2fREhf1tR/image.png",
  facadeGallery: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_BTEoS7oEDyV-KgvmE5ZNnL1E-qkc0PsbL5YHdeupk6dYj9UQ8XCT36XReKDO_2388-xqAkCmtru90pHz_LZARgAmDX9Aumt91h1Up9oApRh8BCFAjn2DBRHajpjKOzIkJNZOAlyZkRqIEqqIQXF9bfGuIIjxNoSFK6Zm5kp-iGN2dVU2BQEQ5FqpndoVDHLDOpZ_abyP8J4HwpzxlO5T035vVNj0mXBSkp9zY59RMf5yfWDpKwoT-dsJgkwbMUvG",
  trainingGallery1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSbd19K83_GKSBqpRrtWWpPJ1FcLkxhWAHEZPw9BLT1sIHF134kC_Bx9yDMS-_caXKP95GPPsoqt-8so8x_RcFat-3_bfYhh7xfXgQPxuT_uqJfzVlavs60Tuw9dFs_ESJlRz17AWj9tuNBoEb9CSV3WSXTOcDQpASlgT0SzLcF_p6hZRGaVCXReY4c2rw_QEWDNs-sFiK6PG57EkMb6manx2quR1ydolMAbf9X4bjRZf61vjJzZqCgT2EIfgPWjY",
  trainingGallery2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlYIK5ECr5uPiOmx83AMn41jS6LzZANcgCVuBm4b1m-k2m8UJPVYyLI5ftllfH9q2TnuSGbFj-uJZl-GXwCIzDhSTz3GerxPOSKbDqy0w9itr5QDcVxv0CQny4AixXKsZqgasMGbIUt5-6kWEDxiK8wAZ2TKvjsmuNlD0v-MAkK_QoDUJKTnrW3W2bTsks5ndzwMNNcQv6i4DR_K6n1RsLHWKccsHVx52VRgkYh7YuKyEVI38vEY6rE2ChVhV86Lnj",
};

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${GYM_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
}
