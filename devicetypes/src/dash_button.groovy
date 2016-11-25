package src
/**
 *  Copyright 2015 SmartThings
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License. You may obtain a copy of the License at:
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License
 *  for the specific language governing permissions and limitations under the License.
 *
 */
metadata {
	definition (name: "Dash Button", namespace: "stshort", author: "Steve Short") {
		capability "Actuator"
		capability "Button"
		capability "Sensor"
		
		command "push"
		command "hold"
	}

	simulator {
		status "button pushed":  "pushed"
		status "button held":  "held"
	}

	tiles {
		standardTile("button", "device.button", width: 1, height: 1) {
			state "default", label: "", icon: "st.unknown.zwave.remote-controller", backgroundColor: "#ffffff"
		}

		main "button"
		details(["button","push","hold"])
	}
}

def parse(String value) {
	log.debug "Parsing ${value}"
	
	def descriptionText = "${device.displayName} button was ${value}"

	//log.debug descriptionText
	
	def map = [
		name: 'button',
		value: value,
		descriptionText: descriptionText,
		data: [buttonNumber: 1],
		translatable: true,
		displayed: true
	]
	
	def result = createEvent (map)
	//log.debug "Parse returned ${result?.descriptionText}"
	
	return result
}

def hold() {
	def descriptionText = "${device.displayName} button was held"
	log.debug descriptionText
	
	sendEvent(name: "button", value: "held", descriptionText: descriptionText, data: [buttonNumber: 1], isStateChange: true)
}

def push() {
	def descriptionText = "${device.displayName} button was pushed"
	log.debug descriptionText
	
	sendEvent(name: "button", value: "pushed", descriptionText: descriptionText, data: [buttonNumber: 1], isStateChange: true)
}