export default async function handler(request, response) {
    
    // Get the payload from the request:
    const payload = request.body

    console.log('PAYLOAD COLLECTION PREPROCESS ->', JSON.stringify(payload.collection));

    // Iterate over the keys in the collection:
    for (const [keyId, keyValue] of Object.entries(payload.collection.keys)) {
      // Iterate over the translations in the key:
      for (const [lang, v] of Object.entries(keyValue.translations)) {
        
        // Process the value of the translation:
        payload.collection.keys[keyId].translations[lang].translation = v.translation.replace(
          '⚠️',
          '',
        )
      }
    }

    response.send(payload);
}