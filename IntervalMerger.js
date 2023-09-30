class IntervalMerger {
    merge(intervals) {
        if (intervals.length <= 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);

        const mergedIntervals = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const currentInterval = intervals[i];
            const previousInterval = mergedIntervals[mergedIntervals.length - 1];

            if (currentInterval[0] <= previousInterval[1]) {
                previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
            } else {
                mergedIntervals.push(currentInterval);
            }
        }

        return mergedIntervals;
    }
}

const intervals = [[1, 3],[2, 6],[8, 10],[15, 18]];
const intervalMerger = new IntervalMerger();
const updatedIntervals = intervalMerger.merge(intervals);

console.log(updatedIntervals);
console.log(`Updated Intervals: ${JSON.stringify(updatedIntervals)}`);
document.getElementById("output").innerHTML = `Updated Intervals: ${JSON.stringify(updatedIntervals)}`;