<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'img' => $this->img,
            'preview' => $this->preview,
            'body' => $this->body,
            'created_at' => $this->createdAtForHumans(),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'statistic' => new StateResource($this->whenLoaded('state')),
        ];

        // return parent::toArray($request);
    }
}