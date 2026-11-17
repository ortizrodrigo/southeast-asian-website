export interface StudentOrganization {
  name: string;
  instagramHandle: string;
  instagramUrl: string;
}

export function parseInstagramHandle(handle: string) {
  const username = handle.trim().replace(/^@/, "");

  if (!/^[A-Za-z0-9_](?:[A-Za-z0-9_.]{0,28}[A-Za-z0-9_])?$/.test(username) || username.includes("..")) {
    throw new Error(`Invalid Instagram handle: ${handle}`);
  }

  return {
    instagramHandle: `@${username}`,
    instagramUrl: `https://www.instagram.com/${username}/`,
  };
}

// Supplied document handles; syntax checks do not establish account ownership.
// Account verification findings are recorded in docs/instagram-validation.md.
const organizationHandles: [name: string, handle: string][] = [
  ["Berkeley Indonesian Student Association", "@berkeleybisa"],
  ["Burmese Student Association", "@calbursa"],
  ["CAL SEA Caucus", "@calseacaucus"],
  ["GABRIELA Berkeley", "@gabrielaberkeley"],
  ["Hmong Student Association at Berkeley", "@hsaberkeley"],
  ["Khmer Student Association", "@cal_khmsa"],
  ["Laotian American Student Representatives", "@cal.lasr"],
  ["League of Filipino Students @ UC Berkeley", "@ifsberkeley"],
  ["Maganda Magazine", "@maganda.magazine"],
  ["Mahiwaga A Cappella", "@mahiwaga.cal"],
  ["Malaysians Students Association", "@masa_berkeley"],
  ["Partnership for Pre-Professional Pilipinx", "@p4_berkeley"],
  ["Pilipino Association for Health Careers", "@pahc_berkeley"],
  ["Pilipinx Academic Student Services", "@passberkeley"],
  ["Pilipinx American Alliance", "@berkeley_paa"],
  ["Pilipinx Association of Scientists, Architects, and Engineers", "@pasae.berkeley"],
  ["Pilipinx Basketball Association", "@pba_cal"],
  ["Pilipinx Cultural Night", "@calpcn"],
  ["Southeast Asian Student Coalition", "@sasc.berkeley"],
  ["Thai American Cultural Association", "@taca_berkeley"],
  ["Thai Student Association", "@thaisa_berkeley"],
  ["Vietnamese Student Association", "@calvsa"],
];

export const studentOrganizations: StudentOrganization[] = organizationHandles.map(
  ([name, handle]) => ({ name, ...parseInstagramHandle(handle) }),
);
