<template>
    <main class="main-page"  id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section mb-3" >
                    <div class="container">
                        <div class="grid align-items-center">
                            <div  v-if="!isSubPage"  class="col-fixed " >
                                <Button @click="$router.go(-1)"   class="p-button p-button-text " icon="pi pi-arrow-left"  />
                            </div>
                            <div  class="col " >
                                <div class=" text-2xl text-primary font-bold" >
                                    {{ $t('addNewUsuario') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="grid ">
                        <div  class="md:col-9 sm:col-12 comp-grid" >
                            <div >
                                <form ref="observer" tag="form" @submit.prevent="submitForm()" :class="{ 'card ': !isSubPage }" class=" ">
                                    <div class="grid">
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('nombre') }} *
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <check-duplicate v-model="formData.nombre" check-path="components_data/usuario_nombre_exist/" v-slot="checker">
                                                    <InputText  ref="ctrlnombre" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.nombre"  :label="$t('nombre')" type="text" :placeholder="$t('enterNombre')"      
                                                    class=" w-full" :class="getErrorClass('nombre')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('nombre')" class="p-error">{{ getFieldError('nombre') }}</small> 
                                                    <small v-if="!checker.loading && checker.exist" class="p-error"> {{ $t('notAvailable') }}</small>
                                                    <small v-if="checker.loading" class="text-500">Checking...</small>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('contrasenia') }} *
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <Password ref="ctrlcontrasenia" v-model="formData.contrasenia" :label="$t('contrasenia')" :placeholder="$t('enterContrasenia')"   
                                                    class="w-full" inputClass="w-full" toggleMask :feedback="true" :class="getErrorClass('contrasenia')" />
                                                    <small v-if="isFieldValid('contrasenia')" class="p-error">{{ getFieldError('contrasenia') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('confirmPassword') }} *
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <Password  class="w-full" :class="getErrorClass('confirm_password', row)" inputClass="w-full" :feedback="false" toggleMask ref="ctrlconfirmcontrasenia" v-model="formData.confirm_password" :label="$t('confirmPassword')" :placeholder="$t('confirmPassword')"  />
                                                    <small v-if="isFieldValid('confirm_password', row)" class="p-error">{{ getFieldError('confirm_password', row) }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('email') }} *
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <check-duplicate v-model="formData.email" check-path="components_data/usuario_email_exist/" v-slot="checker">
                                                    <InputText  ref="ctrlemail" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.email"  :label="$t('email')" type="email" :placeholder="$t('enterEmail')"      
                                                    class=" w-full" :class="getErrorClass('email')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('email')" class="p-error">{{ getFieldError('email') }}</small> 
                                                    <small v-if="!checker.loading && checker.exist" class="p-error"> {{ $t('notAvailable') }}</small>
                                                    <small v-if="checker.loading" class="text-500">Checking...</small>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('telefono') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrltelefono" v-model.trim="formData.telefono"  :label="$t('telefono')" type="tel" :placeholder="$t('enterTelefono')"      
                                                    class=" w-full" :class="getErrorClass('telefono')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('telefono')" class="p-error">{{ getFieldError('telefono') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('foto') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrlfoto" v-model.trim="formData.foto"  :label="$t('foto')" type="text" :placeholder="$t('enterFoto')"      
                                                    class=" w-full" :class="getErrorClass('foto')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('foto')" class="p-error">{{ getFieldError('foto') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center my-3">
                                        <Button class="p-button-primary" type="submit" :label="$t('submit')" icon="pi pi-send" :loading="saving" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
	import {  computed,  reactive, toRefs, onMounted } from 'vue';
	import { required, email, sameAs, } from 'src/services/validators';
	import { useApp } from 'src/composables/app.js';
	import { $t } from 'src/services/i18n';
	import { useAddPage } from 'src/composables/addpage.js';
	import { usePageStore } from 'src/store/page';
	const props = defineProps({
		pageStoreKey: {
			type: String,
			default: 'USUARIO',
		},
		pageName : {
			type : String,
			default : 'usuario',
		},
		routeName : {
			type : String,
			default : 'usuarioadd',
		},
		apiPath : {
			type : String,
			default : 'usuario/add',
		},
		submitButtonLabel: {
			type: String,
			default: () => $t('submit'),
		},
		formValidationError: {
			type: String,
			default: $t('formIsInvalid'),
		},
		formValidationMsg: {
			type: String,
			default: $t('pleaseCompleteTheForm'),
		},
		msgTitle: {
			type: String,
			default: $t('createRecord'),
		},
		msgAfterSave: {
			type: String,
			default: () => $t('recordAddedSuccessfully'),
		},
		msgBeforeSave: {
			type: String,
			default: () => $t(''),
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => {} 
		},
	});
	//lines
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = {
		nombre: "NULL", 
		contrasenia: "", 
		confirm_password: "", 
		email: "", 
		telefono: "NULL", 
		foto: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nombre: { required },
			contrasenia: { required },
			confirm_password: {required, sameAs: sameAs(formData.contrasenia, 'Contrasenia') },
			email: { required, email },
			telefono: {  },
			foto: {  }
		}
	});
	
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });
	
	// event raised before submit form
	function beforeSubmit(){
		return true;
	}
	
	// event raised after form submited
	function afterSubmit(response) { 
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); //reset form data
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect) {
			app.navigateTo(`/usuario`);
		}
	}
	
	const {  saving, pageReady, } = toRefs(page.state);
	
	const { submitForm, getErrorClass, getFieldError, isFieldValid,  } = page.methods;
	
	onMounted(()=>{
		const pageTitle = $t('addNewUsuario');
		app.setPageTitle(props.routeName, pageTitle); // set browser page title
	});
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
