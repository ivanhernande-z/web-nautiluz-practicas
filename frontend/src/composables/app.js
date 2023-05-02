import { useAppStore } from 'src/store/app';
import { useRoute, useRouter } from 'vue-router';
import { AppMenus } from 'src/menus';
import { $t } from 'src/services/i18n';
import { useToast } from "primevue/usetoast";
export function useApp() {
	const store = useAppStore();
	const route = useRoute();
	const router = useRouter();
	const toast = useToast();
	function isDialogOpen(){
		return store.isDialogOpen;
	}
	function isDesktop() {
		return window.innerWidth >= 992;
	}
	
	function openImageDialog (pageData) {
		store.openImageDialog(pageData);
	}

	function openFullScreenLoading (msg) {
		store.openFullScreenLoading(msg);
	}

	function openPageDialog (pageData) {
		store.openPageDialog(pageData);
	}

	function openPageDrawer (pageData) {
		store.openPageDrawer(pageData);
	}
	
	function closeDialogs () {
		store.closeDialogs();
	}

	function setPageTitle (pageName, title) {
		if(pageName == route.name && title){
			document.title = title
		}
	}

	function flashMsg (title, detail, type) {
		if(title || detail){
			let severity = type || "success";
			toast.add({severity, summary: title, detail, life: 3000});
		}
	}

	function navigateTo (path) {
		if(path && route.path !== path){
			router.push(path)
		}
	}

	function showPageRequestError(error) {
		console.error(error);
		const xhrRequest = error?.request;
		const defaultMsg = $t('errorProcessingRequest');  // if error is not a api request error.
		let errorMsgs = [defaultMsg];
		if (xhrRequest) {
			let errorData = xhrRequest.response;
			if (typeof (errorData) === 'string') {
				try {
					// if error message is valid json data
					errorData = JSON.parse(errorData);
				}
				catch (ex) {
					//not a valid json. Display as simple message
					//console.error(ex);
				}
			}
			if (Array.isArray(errorData)) {
				errorMsgs = errorData;
			}
			else if (typeof (errorData) === 'object') {
				errorMsgs = Object.values(errorData);
			}
			else {
				errorMsgs = [errorData.toString()]
			}
		}
		store.showPageErrors(errorMsgs);
		if (xhrRequest?.status == 401) { //token might have expired
			//logout user and navigate to login page
			//startLogOut();
			location.href = "/";
		}
	}

	return {
		isDialogOpen,
		isDesktop,
		openFullScreenLoading,
		openImageDialog,
		openPageDialog,
		openPageDrawer,
		closeDialogs,
		setPageTitle,
		flashMsg,
		navigateTo,
		showPageRequestError,
		menus: AppMenus
	}
}