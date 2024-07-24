package com.hibernate.model.converter;

import com.hibernate.model.Gender;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GenderConverter implements AttributeConverter<Gender, Character>{

	@Override
	public Character convertToDatabaseColumn(Gender attribute) {
		if(attribute == null) return null;
		
		return attribute.getCode();
	}

	@Override
	public Gender convertToEntityAttribute(Character dbData) {
		if(dbData == null)return null;
		
		return Gender.fromCode(dbData);
	}

	
}
