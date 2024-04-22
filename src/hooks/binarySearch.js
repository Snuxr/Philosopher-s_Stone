function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);

    if (arr[mid].title === target) {
        return mid
    } else if (target > arr[mid].title) {
        return binarySearch(arr, target, mid + 1, right)
    } else if (target < arr[mid].title) {
        return binarySearch(arr, target, left, mid - 1)
    }
}
export default binarySearch;