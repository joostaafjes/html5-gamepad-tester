
Simple tool to find output from HTML5 Gamep API (https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
)
# Usage

1. Start server
```bash
python  -m http.server
```

2. Open http://0.0.0.0:8000/ with a browser, e.g. chrome

3. Connect gamepad to your computer

4. Use gamepad and check output in browser window, e.g.

```
{
   "id": "G29 Driving Force Racing Wheel (Vendor: 046d Product: c294)",
   "axes": [
      "-0.00", # [-1, 1] -> [steer left, steer right]
      "-0.00", # [-1, 1] -> [throttle, brake] (note: yes!! throttle is negative, brake is positive)
      "-0.00",
      "0.00",
      "0.00",
      "-0.00",
      "0.00",
      "0.00",
      "0.00",
      "1.29" # [-1, -0.43, 0.14,  0,71] -> arrow keys at wheel [up, right, down, left]
   ],
   "buttons": [
      {
         "button_0": 0 # square button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_1": 0 # cross button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_2": 0 # round button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_3": 0 # triangle button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_4": 0 # left gear paddle shifter (behind steering wheel)
      },
      {
         "button_5": 0 # right gear paddle shifter (behind steering wheel)
      },
      {
         "button_6": 0 # L2 button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_7": 0 # R2 button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_8": 0 # Share button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_9": 0 # Options button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_10": 0 # L3 button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_11": 0 # R3 button at steering wheel: 0 or 1(when pushed)
      },
      {
         "button_12": 0 # Playstation button at steering wheel: 0 or 1(when pushed)
      }
   ]
}
```