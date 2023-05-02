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
                                    {{ $t('editReclutamiento') }}
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
                                <form ref="observer"  tag="form" @submit.prevent="submitForm()" :class="{ 'card ': !isSubPage }" class=" ">
                                    <!--[form-content-start]-->
                                    <div class="grid">
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('posiciones') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrlposiciones" v-model.trim="formData.posiciones"  :label="$t('posiciones')" type="text" :placeholder="$t('enterPosiciones')"   list="posiciones_list"    
                                                    class=" w-full" :class="getErrorClass('posiciones')">
                                                    </InputText>
                                                    <datalist id="posiciones_list">
                                                    <option v-for="(menu, index) in app.menus.posicionesItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                    </datalist>
                                                    <small v-if="isFieldValid('posiciones')" class="p-error">{{ getFieldError('posiciones') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('status') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <Dropdown  class="w-full" :class="getErrorClass('status')"      optionLabel="label" optionValue="value" ref="ctrlstatus"  v-model="formData.status" :options="app.menus.statusItems" :label="$t('status')"  :placeholder="$t('selectAValue')" >
                                                    </Dropdown> 
                                                    <small v-if="isFieldValid('status')" class="p-error">{{ getFieldError('status') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('descripcion') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrldescripcion" v-model.trim="formData.descripcion"  :label="$t('descripcion')" type="text" :placeholder="$t('enterDescripcion')"      
                                                    class=" w-full" :class="getErrorClass('descripcion')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('descripcion')" class="p-error">{{ getFieldError('descripcion') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('titulo') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrltitulo" v-model.trim="formData.titulo"  :label="$t('titulo')" type="text" :placeholder="$t('enterTitulo')"      
                                                    class=" w-full" :class="getErrorClass('titulo')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('titulo')" class="p-error">{{ getFieldError('titulo') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('salario') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrlsalario" v-model.trim="formData.salario"  :label="$t('salario')" type="text" :placeholder="$t('enterSalario')"      
                                                    class=" w-full" :class="getErrorClass('salario')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('salario')" class="p-error">{{ getFieldError('salario') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('tipo') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <Dropdown  class="w-full" :class="getErrorClass('tipo')"      optionLabel="label" optionValue="value" ref="ctrltipo"  v-model="formData.tipo" :options="app.menus.tipo2Items" :label="$t('tipo')"  :placeholder="$t('selectAValue')" >
                                                    </Dropdown> 
                                                    <small v-if="isFieldValid('tipo')" class="p-error">{{ getFieldError('tipo') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('fecha') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <Calendar  :showButtonBar="true" class="w-full" :class="getErrorClass('fecha')" dateFormat="yy-mm-dd" v-model="formData.fecha" :showIcon="true"     mask="YYYY-MM-DD"      />
                                                    <small v-if="isFieldValid('fecha')" class="p-error">{{ getFieldError('fecha') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('telefono') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrltelefono" v-model.trim="formData.telefono"  :label="$t('telefono')" type="number" :placeholder="$t('enterTelefono')"   step="any"    
                                                    class=" w-full" :class="getErrorClass('telefono')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('telefono')" class="p-error">{{ getFieldError('telefono') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="formgrid grid">
                                                <div class="col-12 md:col-3">
                                                    {{ $t('correo') }} 
                                                </div>
                                                <div class="col-12 md:col-9">
                                                    <InputText  ref="ctrlcorreo" v-model.trim="formData.correo"  :label="$t('correo')" type="email" :placeholder="$t('enterCorreo')" hint="Introdusca su correo"     
                                                    class=" w-full" :class="getErrorClass('correo')">
                                                    </InputText>
                                                    <small v-if="isFieldValid('correo')" class="p-error">{{ getFieldError('correo') }}</small> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center my-3">
                                        <Button type="submit" :label="$t('update')" icon="pi pi-send" :loading="saving" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="flex gap-3 justify-content-center align-items-center p-3">
                <div><ProgressSpinner style="width:50px;height:50px" /> </div>
                <div class="text-500">{{ $t('loading') }} </div>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed,  reactive, toRefs, onMounted } from 'vue';
	import { required, email, numeric, } from 'src/services/validators';
	import { useApp } from 'src/composables/app.js';
	import { $t } from 'src/services/i18n';
	import { useEditPage } from 'src/composables/editpage.js';
	import { usePageStore } from 'src/store/page';
	const props = defineProps({
		id: [String, Number],
		pageStoreKey: {
			type: String,
			default: 'RECLUTAMIENTO',
		},
		pageName: {
			type: String,
			default: 'reclutamiento',
		},
		routeName: {
			type: String,
			default: 'reclutamientoedit',
		},
		pagePath: {
			type : String,
			default : 'reclutamiento/edit',
		},
		apiPath: {
			type: String,
			default: 'reclutamiento/edit',
		},
		submitButtonLabel: {
			type: String,
			default: () => $t('update'),
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
			default: $t('updateRecord'),
		},
		msgBeforeSave: {
			type: String,
			default: () => $t(''),
		},
		msgAfterSave: {
			type: String,
			default: () => $t('recordUpdatedSuccessfully'),
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
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		posiciones: "", 
		status: "", 
		descripcion: "", 
		titulo: "", 
		salario: "", 
		tipo: "", 
		fecha: "Seleccione Fecha", 
		telefono: "NULL", 
		correo: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect) {
			app.navigateTo(`/reclutamiento`);
		}
	}
	
	// form validation rules
	const rules = computed(() => {
		return {
			posiciones: {  },
			status: {  },
			descripcion: {  },
			titulo: {  },
			salario: {  },
			tipo: {  },
			fecha: {  },
			telefono: { numeric },
			correo: { email }
		}
	});
	
	const page = useEditPage({store, props, formData, rules, afterSubmit });
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	const {  pageReady, saving, loading, } = toRefs(page.state);
	
	const { apiUrl } = page.computedProps;
	
	const { load, submitForm, getErrorClass, getFieldError, isFieldValid,  } = page.methods;
	
	onMounted(()=>{
		const pageTitle = $t('editReclutamiento');
		app.setPageTitle(props.routeName, pageTitle); // set browser page title
	});
</script>
<style scoped>
</style>
