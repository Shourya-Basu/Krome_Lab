import numpy as np
import librosa
import soundfile as sf

print("Kindly place the audio in the same folder as the code for smooth experience...")

audio = input("\nEnter the audio file with its format extension: ")
signal, sr = librosa.load(audio, sr=None)

choice = input("\nEnter 1 to change Tempo | 2 to change Pitch | 3 to change Both: ")

# -------- FUNCTIONS --------

def tempo(audio, original_bpm, target_bpm):
    tempo_factor = target_bpm / original_bpm
    return librosa.effects.time_stretch(y=audio, rate=tempo_factor)

def pitch(audio, sr, n_steps):
    return librosa.effects.pitch_shift(y=audio, sr=sr, n_steps=n_steps)

def save(modified, sr):
    name = input("\nEnter the filename without format extension: ").strip()
    sf.write(f"{name}.wav", modified, sr)
    print(f"\nAudio saved as {name}.wav")

# -------- TEMPO CHANGE --------

if choice == '1':

    print("\nTempo Modification using BPM")

    original_bpm = float(input("Enter Original BPM of the song: "))
    target_bpm = float(input("Enter Target BPM: "))

    modified = tempo(signal, original_bpm, target_bpm)

    save(modified, sr)

# -------- PITCH CHANGE --------

elif choice == '2':

    print("\nPitch Shift Range: -12 to +12 semitones")
    steps = int(input("Enter Pitch Shift (semitones): "))

    if steps < -12 or steps > 12:
        print("Invalid input! Semitones must be between -12 and +12.")
    else:
        modified = pitch(signal, sr, steps)
        save(modified, sr)

# -------- BOTH TEMPO AND PITCH --------

elif choice == '3':

    print("\nTempo Modification using BPM")

    original_bpm = float(input("Enter Original BPM of the song: "))
    target_bpm = float(input("Enter Target BPM: "))

    print("\nPitch Shift Range: -12 to +12 semitones")
    steps = int(input("Enter Pitch Shift (semitones): "))

    if steps < -12 or steps > 12:
        print("Invalid input! Semitones must be between -12 and +12.")
    else:
        mod1 = tempo(signal, original_bpm, target_bpm)
        mod2 = pitch(mod1, sr, steps)
        save(mod2, sr)

else:
    print("Invalid Input! Please Try Again...")