import {
  IPostRepository,
  IPostRepositoryToken,
} from "../../domain/specifications/IPostRepository";
import GetPostsPayload from "../../application/types/GetPostsPayload";
import { injectable, inject } from "inversiland";
import { UseCase } from "../../../core/application/UseCase";
import GetPostsResponse from "../types/GetPostsResponse";

@injectable()
export default class GetPostsUseCase
  implements UseCase<GetPostsPayload, Promise<GetPostsResponse>>
{
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(payload: GetPostsPayload) {
    return this.postRepository.get(payload);
  }
}
