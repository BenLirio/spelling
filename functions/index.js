const functions = require('firebase-functions')
const textToSpeech = require('@google-cloud/text-to-speech')
const client = new textToSpeech.TextToSpeechClient()

exports.getAudio = functions.https.onCall((data, context) => {
  const { word } = data
  async function quickStart() {
    const request = {
      input: { text: word },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    }
    const [response] = await client.synthesizeSpeech(request)
    return response.audioContent.toString('base64')
  }
  return quickStart()
})
