export default async function handler(request, response) {
    
    // Get the payload from the request:
    const payload = request.body

    console.log('PAYLOAD COLLECTION ADD CODE PLACEHOLDER ->', JSON.stringify(payload.collection));

    // Iterate over the keys in the collection:
    for (const [keyId, keyValue] of Object.entries(payload.collection.keys)) {
      // Iterate over the translations in the key:
      for (const [lang, v] of Object.entries(keyValue.translations)) {
        
        // Insert 'CODE_PLACEHOLDER_' to variables
        if (v.translation.match(/{/)) {
          const openBracketIndex = v.translation.match(/{/).index;
          payload.collection.keys[keyId].translations[lang].translation = v.translation.slice(0, openBracketIndex + 1) + "CODE_PLACEHOLDER_" + v.translation.slice(openBracketIndex + 1);
        }
    }
  }
    response.send(payload);
}