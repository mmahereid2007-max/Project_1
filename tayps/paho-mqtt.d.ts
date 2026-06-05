declare module "paho-mqtt" {
  export class Client {
    constructor(host: string, clientId: string);

    connect(options: {
      userName?: string;
      password?: string;
      useSSL?: boolean;
      timeout?: number;
      onSuccess?: () => void;
      onFailure?: (error: {
        errorCode: number;
        errorMessage: string;
      }) => void;
    }): void;

    subscribe(topic: string): void;
    disconnect(): void;
    isConnected(): boolean;

    onMessageArrived?: (message: Message) => void;
    onConnectionLost?: (error: {
      errorCode: number;
      errorMessage: string;
    }) => void;
  }

  export class Message {
    constructor(payload: string);
    payloadString: string;
    destinationName: string;
  }
}
