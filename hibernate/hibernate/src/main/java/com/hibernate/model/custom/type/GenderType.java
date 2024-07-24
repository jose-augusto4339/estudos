package com.hibernate.model.custom.type;

import java.sql.Types;

import org.hibernate.usertype.UserTypeSupport;

import com.hibernate.model.Gender;

public class GenderType extends UserTypeSupport<Gender>{

	public GenderType(Class<?> returnedClass, int jdbcTypeCode) {
		super(Gender.class, Types.CHAR);
	}

}
