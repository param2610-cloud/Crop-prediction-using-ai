# Essential Sensors Technical Specifications

## 1. Temperature and Humidity Sensor (DHT22/AM2302)
- Operating Voltage: 3.3-6V DC
- Temperature Range: -40°C to 80°C
- Temperature Accuracy: ±0.5°C
- Humidity Range: 0-100% RH
- Humidity Accuracy: ±2% RH
- Response Time: 2s
- Sampling Rate: 0.5 Hz (once every 2 seconds)
- Current Draw: 2.5mA max during conversion
- Cost Range: ₹300-400
- Interface: Digital (Single-wire)
- Lifespan: ~2 years with proper protection

## 2. Soil Moisture Sensor (Capacitive)
- Operating Voltage: 3.3-5V DC
- Measurement Range: 0-100% volumetric water content
- Accuracy: ±3%
- Response Time: <1s
- Output: Analog (0-3V) or Digital
- Probe Length: 98mm
- Operating Temperature: -40°C to 85°C
- Current Consumption: 5mA
- Corrosion Resistant: Yes
- Cost Range: ₹200-300
- Lifespan: 2-3 years with proper maintenance

## 3. Soil pH Sensor
- Measurement Range: 3.0-9.0 pH
- Resolution: 0.1 pH
- Accuracy: ±0.2 pH
- Operating Temperature: 5°C to 60°C
- Response Time: <1 minute
- Output Type: Analog
- Operating Voltage: 5V DC
- Current Draw: 10mA
- Cost Range: ₹1000-1500
- Probe Material: Glass + Reference electrode
- Calibration: 2-point calibration required
- Lifespan: 12-18 months

## 4. Light Intensity Sensor (BH1750)
- Operating Voltage: 3.3-5V DC
- Measurement Range: 1-65535 lux
- Resolution: 1 lux
- Spectral Response: Similar to human eye
- Interface: I2C
- Response Time: 120ms
- Operating Temperature: -40°C to 85°C
- Current Draw: 120μA (active mode)
- Cost Range: ₹200-300
- Accuracy: ±20%
- Lifespan: 3-4 years

## 5. Rainfall Sensor
- Operating Voltage: 3.3-5V DC
- Detection Area: 60cm²
- Output Type: Analog + Digital
- Sensitivity Adjustment: Yes
- Operating Temperature: -25°C to 80°C
- Weatherproof Rating: IP65
- Cost Range: ₹300-400
- Current Consumption: 15mA max
- Measurement Resolution: 0.2mm
- Lifespan: 2-3 years

# Optional Sensors

## 6. NPK Sensor
- Operating Voltage: 5V DC
- Measurement Ranges:
  * Nitrogen: 0-1000 mg/kg
  * Phosphorous: 0-1000 mg/kg
  * Potassium: 0-1000 mg/kg
- Accuracy: ±2% F.S.
- Response Time: <1 minute
- Operating Temperature: 5°C to 45°C
- Current Draw: 50mA
- Cost Range: ₹8000-10000
- Interface: RS485
- Calibration: Required every 6 months
- Lifespan: 2 years

## 7. Camera Module (OV2640)
- Resolution: 2MP (1600x1200)
- Operating Voltage: 3.3V
- Interface: SCCB
- Output Formats: YUV/YCbCr4:2:2, RGB565/555
- Lens Field of View: 75 degrees
- Frame Rate: 15fps at UXGA
- Current Consumption: 20mA active
- Cost Range: ₹500-700
- Operating Temperature: -30°C to 70°C
- Lifespan: 3-4 years

# System Components

## 8. Main Controller (Arduino Nano)
- Microcontroller: ATmega328
- Operating Voltage: 5V
- Input Voltage: 7-12V
- Digital I/O Pins: 22
- Analog Input Pins: 8
- Flash Memory: 32 KB
- SRAM: 2 KB
- Clock Speed: 16 MHz
- Cost Range: ₹300-400

## 9. Communication Module (SIM800L)
- Operating Voltage: 3.4-4.4V DC
- Frequency Bands: 850/900/1800/1900MHz
- Power Consumption: 
  * Sleep mode: 0.7mA
  * Active mode: 250mA
- Operating Temperature: -40°C to 85°C
- Transmission Power: Class 4 (2W @ 850/900MHz)
- Cost Range: ₹400-500
- Interface: UART
- Antenna: External required

## 10. Power System
- Solar Panel:
  * Power Output: 10W
  * Voltage: 12V
  * Size: 30x30cm
  * Cost Range: ₹800-1000

- Battery:
  * Type: Li-ion
  * Capacity: 2200mAh
  * Voltage: 3.7V
  * Charging Current: 500mA
  * Cost Range: ₹400-500

# Maintenance Requirements

1. Regular Calibration Schedule:
- pH Sensor: Every 3 months
- NPK Sensor: Every 6 months
- Soil Moisture: Every 6 months

2. Cleaning Requirements:
- Rainfall Sensor: Monthly
- Soil Probes: After each insertion
- Solar Panel: Bi-weekly

3. Replacement Schedule:
- pH Sensor: Every 18 months
- Soil Moisture Sensor: Every 2 years
- Battery: Every 2 years
