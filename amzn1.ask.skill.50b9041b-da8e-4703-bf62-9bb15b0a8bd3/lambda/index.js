/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const intro = require('./documents/intro.json');
const products = require('./documents/products.json');


const APP_NAME = "Cocacola en tu hogar"
const messages = {
  NOTIFY_MISSING_PERMISSIONS: 'Habilite los permisos de ubicación del dispositivo en la aplicación Amazon Alexa.',
  NO_ADDRESS: 'Parece que no tienes una dirección configurada. Puede configurar su dirección desde la aplicación.',
  ERROR: 'OH oh. Parece que algo salió mal.'
};
const DEVICE_LOCATION_PERMISSION = 'read::alexa:device:all:address';



const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = "<speak><amazon:emotion name='excited' intensity='medium'>Bienvenido Cocacola en tu hogar</amazon:emotion>. Haz un pedido nuevo, consulta el estatus de tu orden o conoce tu historia del compras. Qué te gustaría hacer?</speak>";
        
        //  if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
        //         // Create Render Directive.
        //         handlerInput.responseBuilder.addDirective({
        //                 type: 'Alexa.Presentation.APL.RenderDocument',
        //                 token: "dialogManagementPagerDoc",
        //                 document: intro,
        //                 datasources: {
        //                     "headlineTemplateData": {
        //                         "type": "object",
        //                         "objectId": "headlineSample",
        //                         "properties": {
        //                             "backgroundImage": {
        //                                 "contentDescription": null,
        //                                 "smallSourceUrl": null,
        //                                 "largeSourceUrl": null,
        //                                 "sources": [
        //                                     {
        //                                         "url": "https://scontent.fmex11-1.fna.fbcdn.net/v/t1.6435-9/49899821_1989229194447488_2570201866939924480_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=ndiwmFJMtkYAX819qud&_nc_ht=scontent.fmex11-1.fna&oh=901f4c31ee7ddc5c7c5e92e0f7cfec50&oe=60DC58CA",
        //                                         "size": "large"
        //                                     }
        //                                 ]
        //                             },
        //                             "textContent": {
        //                                 "primaryText": {
        //                                     "type": "PlainText",
        //                                     "text": "Bienvenido a coca cola en tu hogar"
        //                                 }
        //                             },
        //                             "logoUrl": "https://www.xaldigital.com/assets/img/iconos/logo_Xaldigital_am.png",
        //                             "hintText": "Intenta, \"Alexa, cuál es la promo del día?\"",
        //                             "welcomeSpeechSSML": "<speak></speak>"
        //                         },
        //                         "transformers": [
        //                             {
        //                                 "inputPath": "welcomeSpeechSSML",
        //                                 "transformer": "ssmlToSpeech",
        //                                 "outputName": "welcomeSpeech"
        //                             }
        //                         ]
        //                     }
        //                 }
        //             })
        //         }
        
        
        
        
         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                // Create Render Directive.
                handlerInput.responseBuilder.addDirective({
                        type: 'Alexa.Presentation.APL.RenderDocument',
                        token: "dialogManagementPagerDoc",
                        document: products,
                        datasources: {
                            "imageListData": {
                                "type": "object",
                                "objectId": "imageListSample",
                                "backgroundImage": {
                                    "contentDescription": null,
                                    "smallSourceUrl": null,
                                    "largeSourceUrl": null,
                                    "sources": [
                                        {
                                            "url": "https://i.pinimg.com/originals/be/32/e6/be32e6dded9d55be4d42bffadcdadad9.jpg",
                                            "size": "large"
                                        }
                                    ]
                                },
                                "title": "Productos que te pueden interesar",
                                "listItems": [
                                    {
                                        "primaryText": "Coca cola original",
                                        "imageSource": "https://www.coca-colaentuhogar.com/media/catalog/product/c/c/cceth-ccoriginal.png?optimize=medium&fit=bounds&height=550&width=550&canvas=550:550&format=jpeg",
                                        "primaryAction": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "plantList",
                                                "property": "headerTitle",
                                                "value": "${payload.imageListData.listItems[0].primaryText} is selected"
                                            }
                                        ]
                                    },
                                    {
                                        "primaryText": "Ades",
                                        "imageSource": "https://www.coca-colaentuhogar.com/media/catalog/product/a/d/ades_nom051_mango_ref._946ml_1000x1000_1.jpg?optimize=medium&fit=bounds&height=550&width=550&canvas=550:550",
                                        "primaryAction": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "plantList",
                                                "property": "headerTitle",
                                                "value": "${payload.imageListData.listItems[1].primaryText} is selected"
                                            }
                                        ]
                                    },
                                    {
                                        "primaryText": "Garrafón",
                                        "imageSource": "https://www.coca-colaentuhogar.com/media/catalog/product/y/d/ydray-garrafon-ciel-19l-lleno_2_.jpg?optimize=medium&fit=bounds&height=175&width=175&canvas=175:175",
                                        "primaryAction": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "plantList",
                                                "property": "headerTitle",
                                                "value": "${payload.imageListData.listItems[3].primaryText} is selected"
                                            }
                                        ]
                                    },
                                    {
                                        "primaryText": "House of Peonies",
                                        "imageSource": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridList_Image5.png",
                                        "primaryAction": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "plantList",
                                                "property": "headerTitle",
                                                "value": "${payload.imageListData.listItems[4].primaryText} is selected"
                                            }
                                        ]
                                    },
                                    {
                                        "primaryText": "Spruce Nursery",
                                        "imageSource": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridList_Image6.png",
                                        "primaryAction": [
                                            {
                                                "type": "SetValue",
                                                "componentId": "plantList",
                                                "property": "headerTitle",
                                                "value": "${payload.imageListData.listItems[5].primaryText} is selected"
                                            }
                                        ]
                                    }
                                ],
                                "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
                                "hintText": "Try, \"Alexa, Selecciona el numero 1\""
                            }
                        }
                    })
                }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const pepsiIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'pepsiIntent';
    },
    handle(handlerInput) {
        const speakOutput = '<say-as interpret-as="interjection">oye qué te pasa, guácala</say-as>, mejor pídeme una coca. En que te puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const OrderIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OrderIntent';
    },
    async handle(handlerInput) {
        const { requestEnvelope, serviceClientFactory, responseBuilder } = handlerInput;
        const speakOutput = 'Hello World!';
        
        try {
          const { deviceId } = requestEnvelope.context.System.device;
          const deviceAddressServiceClient = serviceClientFactory.getDeviceAddressServiceClient();
          const address = await deviceAddressServiceClient.getFullAddress(deviceId);
          let response;
          if (address === undefined || (address.addressLine1 === null && address.stateOrRegion === null)) {
            response = responseBuilder.speak(messages.NO_ADDRESS).getResponse();
            return response;
          } else {
            const completeAddress = `${address.addressLine1}, ${address.stateOrRegion}, ${address.postalCode}`;
            const response = `Tu orden será entregada en, ${completeAddress}. esta bien?`;
            return handlerInput.responseBuilder
                .speak(response)
                .reprompt('Venga, Dime si estas deacuerdo con la dirección')
                .withSimpleCard(APP_NAME, response)
                .getResponse();
          }
        } catch (error) {
          console.log(JSON.stringify(error));
          if (error.statusCode === 403) {
            return responseBuilder
            .speak(messages.NOTIFY_MISSING_PERMISSIONS)
            .withAskForPermissionsConsentCard([DEVICE_LOCATION_PERMISSION])
            .getResponse();
          }
          console.log(JSON.stringify(error));
          const response = responseBuilder.speak(messages.ERROR).getResponse();
          return response;
        }
    }
};


const OrderlAlchoholIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OrderlAlchoholIntent';
    },
    handle(handlerInput) {
        const speakOutput = `<speak>
        <audio src="soundbank://soundlibrary/musical/amzn_sfx_drum_and_cymbal_01"/>
    <say-as interpret-as="interjection">ámonos</say-as>.
    Hoy por ti, mañana por mi. 
    El producto ha sido agregado a tu carrito y será enviado a la misma dirección. Te gustaría ordenar algo mas?
    </speak>`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const PastOrdersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PastOrdersIntent';
    },
    handle(handlerInput) {
        const rndInt = Math.floor(Math.random() * 3) + 1
        const speak = {
            1: "Tus últimos 3 pedidos han sido. 2 garrafones el 3 de julio, 1 garrafon el 10 de mayo y 3 garrafones el 28 de mayo.",
            2: "Pediste 3 garrafones para tu oficina",
            3: "Pediste 3 garrafones y un cuerpo mas ligero. Nosotros pusimos los garrafones."
        }
        
        
        const speakOutput = speak[rndInt];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const OrderSatusIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OrderSatusIntent';
    },
    handle(handlerInput) {
        const rndInt = Math.floor(Math.random() * 3) + 1
        const speak = {
            1: "Tu orden esta programada para ser entregada mañana. Te puedo ayudar en algo más?",
            2: "Tu orden se encuentra en camino. Te puedo ayudar en algo más?",
            3: "Tu orden se encuentra en ruta y seras notificada cuando el repartidor llegue. Te puedo ayudar en algo más?"
        }
        const speakOutput = speak[rndInt];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Te puedo ayudar en algo más?')
            .getResponse();
    }
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Perfecto, Hemos registrado tu pedido. Cuando gustes puedes preguntarme sobre el estatus de tu pedido!. Te puedo ayudar en algo más?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Te puedo ayudar en algo más?')
            .getResponse();
    }
};

const NoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Dime a donde más te lo podemos enviar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDelegateDirective({
            name: 'GetAdressIntent',
                slots: {}
            })
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const GetAdressIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetAdressIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Perfecto, Hemos registrado tu pedido. Te puedo ayudar en algo más?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('Te puedo ayudar en algo más?')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes decir ordernar o consultar un pedido, en qué te puedo ayudar?';

        return handlerInput.responseBuilder     
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'        
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '';
        
        handlerInput.responseBuilder.addDirective({
            type: 'VideoApp.Launch',
            videoItem:
            {
                source: 'https://accesoempleadoss3102406-dev.s3.amazonaws.com/public/Coca-Cola.mp4',
                metadata: {
                    title: 'coca cola en tu hogar',
                    subtitle: 'Power by xaldigital'            
              }
            }
      })

        return handlerInput.responseBuilder
            .speak(null)
            .getResponse();
        
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

function supportsDisplay(handlerInput) {
  const hasDisplay =
    handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
    handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display;
  return hasDisplay;
}

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        pepsiIntentHandler,
        OrderIntentHandler,
        OrderlAlchoholIntentHandler,
        PastOrdersIntentHandler,
        OrderSatusIntentHandler,
        YesIntentHandler,
        NoIntentHandler,
        GetAdressIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withApiClient(new Alexa.DefaultApiClient())
    .lambda();