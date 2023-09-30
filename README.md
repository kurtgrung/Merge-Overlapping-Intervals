# Merge Overlapping Intervals

Overall, this code follows the Open/Closed Principle by encapsulating the merging logic in a separate class (IntervalMerger) and method (merge) while allowing for easy extension and modification of the merging behavior in the future without modifying the existing code.

Codepen of the snippet running: <br>
https://codepen.io/kurtgrung/pen/ExGRKyO

### IntervalMerger Class:
A class called IntervalMerger that will encapsulate the logic for merging intervals.

### merge() Method:
Within the IntervalMerger class, we have a merge method that takes an array of intervals as input and merges them according to the merging logic.

### Merging Logic:
The merging logic sorts the intervals based on their Array element position and iterates through them, merging overlapping or adjacent intervals.

### Merging Loop:
We iterate over the sorted intervals, comparing each interval with the previous one to determine if they can be merged or not.

### Merging Intervals:
If the current interval can be merged with the previous one (i.e., its start Array element position is less than or equal to the end element position of the previous interval), we update the end time of the previous interval to be the maximum of the two end times. This effectively merges the intervals. If the intervals cannot be merged, we add the current interval to the list of merged intervals.

### Returning Merged Intervals:
The return function of merged intervals.

### Usage:
Create an instance of IntervalMerger and call the merge method with the input array of intervals to obtain the merged intervals.

### Output:
The merged intervals are logged to the console.
