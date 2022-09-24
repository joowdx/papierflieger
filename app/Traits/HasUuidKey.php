<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait HasUuidKey
{

    protected static function bootHasUuidKey()
    {
        static::creating(function($model) {

            $model->{$model->getKeyName()} = Str::orderedUuid()->toString();

        });
    }

    public function getKeyType()
    {
        return 'string';
    }

    public function getIncrementing()
    {
        return null;
    }

}
