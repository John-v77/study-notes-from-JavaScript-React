# Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

# The time should be in HH:MM format.

# Examples:

# digits: 1, 9, 8, 3 => result: "19:38"
# digits: 9, 1, 2, 5 => result: "21:59"
# Notes
# Result should be a valid 24-hour time, between 00:00 and 23:59.
# Every input has a valid answer.


# Solution
def late_clock(*a):
    for h in range(23, -1, -1):
        for m in range(59, -1, -1):
            x = f'{h:02}'
            y = f'{m:02}'
            s = list(map(int,list(x + y)))
            if sorted(s)==sorted(a):
                return f'{x}:{y}'