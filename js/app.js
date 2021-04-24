console.log('Hello world')
window.addEventListener('gamepadconnected',event => {
   console.log('Gamepad connected', event.gamepad)
})

window.addEventListener('gamepaddisconnected',event => {
   console.log('Gamepad disconnected', event.gamepad)
})

const gamepadDisplay = document.getElementById('gamepad-display')

function update() {
   const gamepads = navigator.getGamepads()
   if (gamepads[0]) {
	   const gamepadState = {
		   id: gamepads[0].id,
		   axes: [
			   gamepads[0].axes[0].toFixed(2),
			   gamepads[0].axes[1].toFixed(2),
			   gamepads[0].axes[2].toFixed(2),
			   gamepads[0].axes[3].toFixed(2),
			   gamepads[0].axes[4].toFixed(2),
			   gamepads[0].axes[5].toFixed(2),
			   gamepads[0].axes[6].toFixed(2),
			   gamepads[0].axes[7].toFixed(2),
			   gamepads[0].axes[8].toFixed(2),
			   gamepads[0].axes[9].toFixed(2),
		   ],
		   buttons:[ { button_0: gamepads[0].buttons[0].value },
			   { button_1: gamepads[0].buttons[1].value },
			   { button_2: gamepads[0].buttons[2].value },
			   { button_3: gamepads[0].buttons[3].value },
			   { button_4: gamepads[0].buttons[4].value },
			   { button_5: gamepads[0].buttons[5].value },
			   { button_6: gamepads[0].buttons[6].value },
			   { button_7: gamepads[0].buttons[7].value },
			   { button_8: gamepads[0].buttons[8].value },
			   { button_9: gamepads[0].buttons[9].value },
			   { button_10: gamepads[0].buttons[10].value },
			   { button_11: gamepads[0].buttons[11].value },
			   { button_12: gamepads[0].buttons[12].value },
		   ],
	   }
	   // console.log(gamepads[0])
	   gamepadDisplay.textContent = JSON.stringify(gamepadState, null, 3)
   }
   window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
