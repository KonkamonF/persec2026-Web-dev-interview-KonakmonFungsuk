"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
function autocomplete(search, items, maxResult) {
    const lowerSearch = search.toLowerCase();
    const matched = items.filter((item) => item.toLowerCase().includes(lowerSearch));
    const sorted = matched.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        const aIndex = aLower.indexOf(lowerSearch);
        const bIndex = bLower.indexOf(lowerSearch);
        if (aIndex === 0 && bIndex !== 0)
            return -1;
        if (bIndex === 0 && aIndex !== 0)
            return 1;
        const aIsMiddle = aIndex > 0 && aIndex + lowerSearch.length < aLower.length;
        const bIsMiddle = bIndex > 0 && bIndex + lowerSearch.length < bLower.length;
        if (aIsMiddle && !bIsMiddle)
            return -1;
        if (bIsMiddle && !aIsMiddle)
            return 1;
        return aIndex - bIndex;
    });
    return sorted.slice(0, maxResult);
}
