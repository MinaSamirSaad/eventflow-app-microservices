import { KAFKA_SERVICE, KAFKA_TOPICS } from '@app/kafka';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(@Inject(KAFKA_SERVICE) private readonly kafkaService: ClientKafka) {}
  
  async onModuleInit() {
    // Connect to Kafka when the module is initialized
    await this.kafkaService.connect();
  }



  simulateUserRegistration(email: string) {
    // Simulate user registration
    this.kafkaService.emit(KAFKA_TOPICS.USER_REGISTERED, {
      email,
      timestamp: new Date().toISOString(),
    });
    return 'User registration event published to Kafka';
  }
}
