class IntervalMerger {
    merge(intervals) {
        if (intervals.length <= 1) return intervals;

        const mergedIntervals = [];
        intervals.sort((a, b) => a[0] - b[0]);

        intervals.forEach(function (currentInterval, i) {

            const previousInterval = //Conditional (ternary) operator
                i > 0 ? mergedIntervals[mergedIntervals.length - 1] : 0;

            if (currentInterval[0] <= previousInterval[1]) {
                previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
            } else {
                mergedIntervals.push(currentInterval);
            }
        });

        return mergedIntervals;
    }
}

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const intervalMerger = new IntervalMerger();
const updatedIntervals = intervalMerger.merge(intervals);

console.log(updatedIntervals);
console.log(`Updated Intervals: ${JSON.stringify(updatedIntervals)}`);