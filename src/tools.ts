/**
 * json对象 转换成 ?a=1&b=2&c=3 的样子
 * @param {any} json json对象
 */
export function JsonToQuery(json: any) {
  let query = '?'
  for (const key in json) {
    query += `${key}=${json[key]}&`
  }
  return query.slice(0, -1);
}

/**
 * 把'?brandId=1&modelId=19427'的字符串转换为json对象
 * @param url 带转换字符串
 * @param seperator1 用来替换与号（&）的分隔符，默认是与号（&）
 * @param seperator2 用来替换等号（=）的分隔符，默认是等号（=）
 */
export function QueryToJson(url: string, seperator1 = '&', seperator2 = '=') {
  const obj: any = {};
  const q = url.split('?')[1] || '';
  q.split(seperator1).forEach((v: string) => {
    const valArr: Array<string> = v.split(seperator2);
    const key = valArr[0];
    const val = valArr[1];
    obj[key] = val;
  })
  return obj;
}

/**
 * 获取当前时间的年月日：2021-01-01
 * @param {any} timeStamp 目标时间戳
 */
export function GetCurrentDate(timeStamp: number) {
  const date: Date = timeStamp ? new Date(timeStamp) : new Date();
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  month = month.toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 获取项目入口url上面的参数
 */
export const entryUrlQuery = (() => QueryToJson(location.href))();

/**
 * 创建用于template遍历的key
 * 禁止在template中使用，会重新渲染template造成已改变template数据的丢失
 */
export function CreateViewKey() {
  return `ViewKey_${new Date().getTime()}`;
}
/**
 * 复制传入的文字（暂不考虑）兼容性
 * @param text {string} 要拷贝的文本
 * @returns Promise<void>
 */
export function CopyText(text: string): Promise<void> {
  return navigator?.clipboard?.writeText(text);
}
