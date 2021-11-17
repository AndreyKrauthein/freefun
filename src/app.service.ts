import { Injectable, Res } from '@nestjs/common';

@Injectable()
export class AppService {
  index(res): string {
    return res.render(
      "index"
    )
  }
}
