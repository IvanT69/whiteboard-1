function p8_isAnagram(str1, str2) {
    const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

