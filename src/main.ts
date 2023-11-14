import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ForumAPI')
    .setDescription(
      'Esta API destina-se à fornecer um ambiente interativo e colaborativo entre os alunos de uma escola, funcionando como um fórum. Este sistema permite uma comunicação eficiente e organizada, promovendo a interação entre os estudantes, professores e administradores.',
    )
    .setVersion('0.1')
    .addBearerAuth()
    .addTag('users', `Usuários são utilizados para muitas coisas`)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
