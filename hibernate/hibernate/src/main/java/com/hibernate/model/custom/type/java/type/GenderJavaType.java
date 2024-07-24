package com.hibernate.model.custom.type.java.type;

import org.hibernate.type.descriptor.WrapperOptions;
import org.hibernate.type.descriptor.java.AbstractClassJavaType;
import org.hibernate.type.descriptor.java.CharacterJavaType;

import com.hibernate.model.Gender;

public class GenderJavaType extends AbstractClassJavaType<Gender>{
	private static final long serialVersionUID = 1L;
	
	public static final GenderJavaType INSTANCE =
			new GenderJavaType();
	
	
	protected GenderJavaType() {
		super(Gender.class);
	}
	
	public String toString(Gender value) {
		return value == null ? null : value.name();
	}
	
	public Gender fromString(CharSequence string) {
		return string == null ? null : Gender.valueOf(string.toString());
	}

	@Override
	public <X> X unwrap(Gender value, Class<X> type, WrapperOptions options) {
		return CharacterJavaType.INSTANCE.unwrap(
				value == null ? null : value.getCode(), 
				type,
				options
		);
	}

	@Override
	public <X> Gender wrap(X value, WrapperOptions options) {
		return Gender.fromCode(CharacterJavaType.INSTANCE.wrap(value, options));
	}

}
