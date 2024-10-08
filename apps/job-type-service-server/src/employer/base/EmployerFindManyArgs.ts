/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployerWhereInput } from "./EmployerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmployerOrderByInput } from "./EmployerOrderByInput";

@ArgsType()
class EmployerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmployerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmployerWhereInput, { nullable: true })
  @Type(() => EmployerWhereInput)
  where?: EmployerWhereInput;

  @ApiProperty({
    required: false,
    type: [EmployerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmployerOrderByInput], { nullable: true })
  @Type(() => EmployerOrderByInput)
  orderBy?: Array<EmployerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmployerFindManyArgs as EmployerFindManyArgs };
