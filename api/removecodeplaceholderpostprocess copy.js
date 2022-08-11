export default async function handler(request, response) {
    const payload = request.body

    console.log('PAYLOAD COLLECTION REMOVE CODE PLACEHOLDER ->', JSON.stringify(payload.collection));

    // Iterate over the keys in the collection:
    for (const [keyId, keyValue] of Object.entries(payload.collection.keys)) {
      // Iterate over the translations in the key:
      for (const [lang, v] of Object.entries(keyValue.translations)) {
         // If translation value contains 'CODE_PLACEHOLDER_' remove it 
         // Process the value of the translation:
        payload.collection.keys[keyId].translations[lang].translation = v.translation.replace(
         'CODE_PLACEHOLDER_',
         '',
       )
      }
    }

    response.send(payload);
}
