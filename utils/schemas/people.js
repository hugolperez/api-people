const joi = require('@hapi/joi');

const peopleIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const peopleFirstNameSchema = joi.string().max(50);
const peopleLastNameSchema = joi.string().max(50);
const peopleEmailSchema = joi.string().email();
const peopleGenderSchema = joi.string().max(30);
const peopleCompanyNameSchema = joi.string().max(150);
const peopleJobTitleSchema = joi.string().max(150);
const peopleUniversitySchema = joi.string().max(150);
const peopleUrlSchema = joi.string().uri();

const createPersonSchema = {
  firstName: peopleFirstNameSchema.required(),
  lastName: peopleLastNameSchema.required(),
  email: peopleEmailSchema.required(),
  gender: peopleGenderSchema.required(),
  companyName: peopleCompanyNameSchema.required(),
  jobTitle: peopleJobTitleSchema.required(),
  university: peopleUniversitySchema,
  url: peopleUrlSchema,
};

const updatePersonSchema = {
  firstName: peopleFirstNameSchema,
  lastName: peopleLastNameSchema,
  email: peopleEmailSchema,
  gender: peopleGenderSchema,
  companyName: peopleCompanyNameSchema,
  jobTitle: peopleJobTitleSchema,
  university: peopleUniversitySchema,
  url: peopleUrlSchema,
};

module.exports = {
  peopleIdSchema,
  createPersonSchema,
  updatePersonSchema,
};
