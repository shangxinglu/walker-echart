import { EchartPublicProps } from "@packages/EChart";

/**
 * 递归合并两个对象
 * @param target 目标对象
 * @param source 源对象
 * @returns 合并后的对象
 */
export function merge(target: any, source: any): any {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        merge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}

/**
 * 判断是否为对象
 * @param obj 待判断的对象
 * @returns 是否为对象
 */
function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

/**
 * @description 获取基本props
 */
export function getBasicProps(props:EchartPublicProps) {
  const { width, height } = props;
  return {
    width,
    height,
  }
}
