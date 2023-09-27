import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8001, { cors: '*:*' })
export class ChampionshipGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('status')
  handleStatus(@MessageBody() status: string): void {
    this.server.emit('status', status);
  }

  @SubscribeMessage('matches')
  handleMatches(@MessageBody() matches: object): void {
    this.server.emit('matches', matches);
  }
}
