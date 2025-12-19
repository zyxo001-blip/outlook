/**
 * 数据适配层
 * 当前仅支持本地数组
 * 预留：文件 / 接口 / 智能分析
 */
function normalizeStudentList(list) {
  if (!Array.isArray(list)) return [];
  return list.map(n => n.trim());
}
