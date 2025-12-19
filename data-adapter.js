/**
 * 数据适配层
 * 作用：统一处理学生名单来源与格式
 */

function normalizeStudentList(rawList) {
  if (!Array.isArray(rawList)) return [];

  return rawList
    .map(name => String(name).trim())
    .filter(name => name.length > 0);
}

/**
 * 对外暴露的入口方法
 */
function adaptStudentData(rawList) {
  return normalizeStudentList(rawList);
}
