# Dashboard UI - Copilot Instructions

## Project Overview
Angular 15 dashboard application with a responsive design requirement using Bootstrap 5, custom SCSS, and PrimeNG components. The application showcases a modern admin dashboard with sidebar navigation, data visualization, and interactive filters.

## Architecture & Key Patterns

### Component Structure
- **Modular Design**: Project uses standalone components with lazy-loading via `AppRoutingModule`
- **SCSS Organization**: Global styles in `src/styles.scss`; component-specific styles in `.component.scss` files
- **Default Route**: Dashboard should be the default view on app launch (configure in `app-routing.module.ts`)

### File Organization
```
src/
├── app/
│   ├── app.module.ts          # Main app module
│   ├── app-routing.module.ts  # Route definitions
│   └── app.component.*        # Root component (contains router-outlet)
├── styles.scss                # Global styles & CSS variables
└── index.html                 # Entry point
```

## Critical Workflows

### Development Server
```powershell
npm start              # Runs `ng serve` on http://localhost:4200
npm run build          # Production build to dist/dashboard-ui/
npm run watch          # Development build with watch mode
npm test               # Unit tests via Karma
```

### Component Generation
```powershell
ng generate component components/sidebar --style=scss
ng generate service services/data --skip-tests
```

## Design & Styling Patterns

### Color Palette & Fonts (from screenshot)
- **Primary Purple**: `#7C3AED` (sidebar, buttons, accents)
- **Secondary Accent**: `#EC4899` (status indicators)  
- **Background**: Light gray/white with subtle borders
- **Typography**: Modern sans-serif (use system font stack or specify in global styles)
- **Font Sizes**: 
  - Headers (H1): ~24px
  - Subheaders (H3): ~14-16px
  - Body text: ~12-14px

### Responsive Breakpoints (Bootstrap 5 aligned)
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Animation Conventions
- Sidebar toggle: `transition: transform 0.3s ease-in-out`
- Card hover: Scale `transform: scale(1.02)` + box-shadow elevation
- Dashboard entries: Fade-in staggered animation on load

## Key Dependencies

### Current
- `@angular/animations`: ^15.2.0 (for Angular Animations)
- `@angular/forms`: ^15.2.0 (reactive/template-driven forms)
- `@angular/router`: ^15.2.0 (routing)
- `rxjs`: ~7.8.0 (reactive programming)

### To Install (for requirements)
```powershell
npm install bootstrap@5 primeng primeicons apexcharts ng-apexcharts
```

## Feature Implementation Guidelines

### Sidebar Toggle
- Use `@HostListener` or button click handlers to manage state
- State stored in component `isOpen: boolean = true` (default open)
- Apply CSS class binding: `[ngClass]="{ collapsed: !isOpen }"`

### Charts (ApexCharts)
- Create `shared/charts/` component for reusable chart instances
- Example: Analytics bar chart, Revenue pie chart
- Configure legend, tooltips, and responsive options in component `ngOnInit()`

### Date Picker (PrimeNG)
- Use `<p-calendar>` component in filters section
- Bind to `selectedDate: Date` property with two-way binding `[(ngModel)]`
- Import `CalendarModule` in feature module

### Dropdown Filter (PrimeNG)
- Use `<p-dropdown>` above chart areas for category/service filtering
- Bind `[options]="filterOptions"` to component property
- Emit filter changes via `(onChange)` to update chart data

## Code Standards

### TypeScript/Angular
- **Strict Mode**: Enabled in `tsconfig.json` - no `any` types
- **Property Access**: Use `@Input/@Output` decorators over public properties for components
- **Templates**: Use Angular structural directives (`*ngIf`, `*ngFor`) with trackBy functions
- **Services**: Singleton services for data management; inject via constructor

### SCSS
- Use CSS variables for theme colors: `--primary-color: #7C3AED;`
- Nest selectors logically; max 3 levels
- Use BEM naming for complex components: `.dashboard__card--active`

### Naming Conventions
- Components: `DashboardComponent`, `SidebarComponent`
- Services: `DataService`, `AuthService`
- Files: kebab-case (`sidebar.component.ts`)
- Interfaces: `IUser`, `IChartConfig`

## Critical Configuration

### Angular CLI Configuration
- **Schematic Defaults** (`angular.json`):
  - New components use SCSS: `"style": "scss"`
  - Prefix: `app-` (e.g., `<app-sidebar>`)
- **Strict TypeScript**: Enables strict template checking via `strictTemplates: true`

### Build Output
- Production: `dist/dashboard-ui/`
- Development source maps enabled for debugging

## Common Tasks

### Add a New Dashboard Widget
1. Generate component: `ng generate component components/dashboard/widgets/[name]-widget`
2. Create corresponding service for data: `ng generate service services/[name]-service`
3. Import PrimeNG components if needed in module
4. Apply color palette and responsive styling to `.component.scss`
5. Wire up chart/data binding in component

### Update Global Styling
- Edit `src/styles.scss` for theme changes
- Define CSS variables at `:root` for easy theming
- Changes auto-reload via `ng serve`

### Test Components
- Unit tests in `.component.spec.ts` files
- Run via `npm test` (opens Karma test runner)
- Use `TestBed` for component setup, `fixture.detectChanges()` for change detection

## Notes for AI Agents

- **Screenshot reference**: The attached UI mock shows purple sidebar, card-based dashboard layout, and data visualization areas - match this design exactly
- **Default state**: App should load with Dashboard route selected and sidebar open by default
- **Responsive priority**: Mobile-first CSS approach; test at 320px, 768px, 1024px breakpoints
- **Performance**: Use `OnPush` change detection strategy for data-heavy components like charts
- **State management**: Keep component state simple; extract complex logic to services
