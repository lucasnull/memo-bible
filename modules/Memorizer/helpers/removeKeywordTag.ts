const _removeKeywordTag = (verse: string) => {
  const regex = /'/g;
  return verse.replace(regex, "");
};

export function removeKeywordTag<T>(target: T): T {
  if (Array.isArray(target)) {
    return target.map((value) => ({
      ...value,
      text: _removeKeywordTag(value.text),
    })) as T;
  }

  if (typeof target === "string") {
    return _removeKeywordTag(target) as T;
  }

  return {
    ...target,
    text: _removeKeywordTag((target as any)["text"]),
  };
}
