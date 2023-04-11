import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PublicModule } from './public/public.module';
import { UserTokenMiddleware } from './common/middlewares/user-token.middleware';
import { StoreModule } from './store/store.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventsDemoModule } from './events-demo/events-demo.module';
import { MvcDemoModule } from './mvc-demo/mvc-demo.module';

@Module({
  imports: [
    PublicModule,
    StoreModule,
    EventsDemoModule,
    MvcDemoModule,
    EventEmitterModule.forRoot({
      // Wildcards * in listeners e.g. users.*
      wildcard: true,
      // Delimiter for the namespaces in events e.g. users.registration
      delimiter: '.',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserTokenMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
