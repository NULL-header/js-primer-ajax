async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = createView(userInfo);
    displayView(view);
  } catch (e) {
    console.log(e);
  }
}
function getUserId() {
  const dom = <HTMLInputElement>document.getElementById("userId");
  return dom.value;
}
async function fetchUserInfo(userId: string) {
  const res = await pullUserInfo(userId);
  console.log(res.status);
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return await res.json();
}

async function pullUserInfo(userId: string) {
  const baseUrl = "https://api.github.com/users/";
  const url = baseUrl + encodeURIComponent(userId);
  return await fetch(url);
}
function displayView(view: string) {
  const result = document.getElementById("result");
  if (!result) throw new Error('Dom which has a tag witch has "userId" as id.');
  result.innerHTML = view;
}
interface IUserInfo {
  name: string;
  login: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
  location: string;
  // eslint-disable-next-line camelcase
  public_repos: string;
  [key: string]: unknown;
}

function createView(userInfo: IUserInfo) {
  return escapeHTML`
<h4>${userInfo.name} (@${userInfo.login})</h4>
<img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
<dl>
  <dt>Location</dt>
  <dd>${userInfo.location}</dd>
  <dt>Repositories</dt>
  <dd>${userInfo.public_repos}</dd>
</dl>
`;
}

function escapeSpecialChars(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings: TemplateStringsArray, ...values: any[]) {
  return strings.reduce((result: string, str: string, i: number) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else if (value) {
      return result + String(value) + str;
    } else {
      return result + str;
    }
  }, "");
}
